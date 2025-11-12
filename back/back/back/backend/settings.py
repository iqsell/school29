"""
Django settings for backend project.
"""

from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

# !!! ОБЯЗАТЕЛЬНО поменяй ключ на реальный в продакшене !!!
SECRET_KEY = '64dd5affc9b7f5cf26f9c926ed65f35d0e4da267380160243ee63484cb87afd0ef4863fdd6ffebd752279fd4a6771b9357fd'

DEBUG = False

ALLOWED_HOSTS = [
    "193.227.241.112",
    "127.0.0.1",
    "localhost",
    "школа29.рф",
    "www.школа29.рф",
    "api.школа29.рф",
    "xn--29-6kc3bfr2e.xn--p1ai",
    "www.xn--29-6kc3bfr2e.xn--p1ai",
    "api.xn--29-6kc3bfr2e.xn--p1ai",
]

# Apps
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "corsheaders",
    "news",
    "documents",
    "reference",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "backend.wsgi.application"

# Database (в продакшене лучше PostgreSQL, а не sqlite)
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Password validators
AUTH_PASSWORD_VALIDATORS = [
    {"NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"},
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

# Localization
LANGUAGE_CODE = "ru-ru"
TIME_ZONE = "Europe/Moscow"
USE_I18N = True
USE_TZ = True

# Static / Media
STATIC_URL = "/static/"
STATIC_ROOT = '/var/www/static_shkola29/'

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# -----------------------------
# CORS / CSRF настройки
# -----------------------------
CORS_ALLOW_CREDENTIALS = True

CORS_ALLOWED_ORIGINS = [
    "https://школа29.рф",
    "https://www.школа29.рф",
    "https://api.школа29.рф",
    "https://xn--29-6kc3bfr2e.xn--p1ai",
    "https://www.xn--29-6kc3bfr2e.xn--p1ai",
    "https://api.xn--29-6kc3bfr2e.xn--p1ai",
    "http://193.227.241.112:3000",
    "https://193.227.241.112:3000",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

CSRF_TRUSTED_ORIGINS = [
    "https://школа29.рф",
    "https://www.школа29.рф",
    "https://api.школа29.рф",
    "https://xn--29-6kc3bfr2e.xn--p1ai",
    "https://www.xn--29-6kc3bfr2e.xn--p1ai",
    "https://api.xn--29-6kc3bfr2e.xn--p1ai",
    "http://193.227.241.112",
    "https://193.227.241.112",
]

# Отключить разрешение всех origin для безопасности
CORS_ALLOW_ALL_ORIGINS = False

# -----------------------------
# Безопасность за Nginx
# -----------------------------
SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
USE_X_FORWARDED_HOST = True
USE_X_FORWARDED_PORT = True

# ОТКЛЮЧИТЬ SSL редирект в Django - пусть этим занимается Nginx
SECURE_SSL_REDIRECT = False

# Cookies
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_HTTPONLY = True
SESSION_COOKIE_HTTPONLY = True

# HSTS (включить позже при стабильном https)
SECURE_HSTS_SECONDS = 0
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True

# Доп. защита
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
X_FRAME_OPTIONS = "DENY"

# Dev static (только при DEBUG=True)
if DEBUG:
    STATICFILES_DIRS = [os.path.join(BASE_DIR, "static")]
else:
    STATICFILES_DIRS = []