# Sử dụng image PHP 8.2-FPM chính thức
FROM php:8.2-fpm

# Cài đặt các dependencies cần thiết cho Laravel
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

# Cài đặt các extension PHP phổ biến
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Cài đặt Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Đặt thư mục làm việc
WORKDIR /var/www

# Sao chép code của bạn vào container
COPY . /var/www

# Phân quyền
RUN chown -R www-data:www-data /var/www

# Container sẽ lắng nghe trên port 9000 cho PHP-FPM
EXPOSE 9000