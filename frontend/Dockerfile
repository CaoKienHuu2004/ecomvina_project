# Sử dụng image Node.js 18
FROM node:18-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json để tận dụng cache
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Sao chép toàn bộ code còn lại
COPY . .

# Mở port 3000 cho dev server
EXPOSE 3000

# Lệnh mặc định khi container khởi chạy
CMD ["npm", "run", "dev"]