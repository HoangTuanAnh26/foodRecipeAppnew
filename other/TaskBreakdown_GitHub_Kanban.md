# 🍽️ Food Recipe App — Task Breakdown (GitHub Kanban)

> **Stack**: React + TypeScript (FE) | Laravel (BE) | PostgreSQL | TheMealDB API

---

## 🏗️ EPIC 1 — Khởi tạo Laravel Backend

---

**Task BE-01**

Task: Tìm hiểu cấu trúc thư mục Laravel
Mục tiêu:

- Đọc và hiểu từng folder trong project Laravel
- Biết folder nào KHÔNG được sửa

Thời gian: 20 phút

Done khi:

- Viết được ghi chú giải thích app/, routes/, database/, config/

Kiến thức học được:

- Laravel project structure
- Vai trò của từng thư mục
- Convention "không sửa vendor/"

---

**Task BE-02**

Task: Cài đặt Laravel project
Mục tiêu:

- Tạo project Laravel tên "backend" trong thư mục gốc dự án
- Chạy được localhost:8000

Thời gian: 20 phút

Done khi:

- php artisan serve chạy thành công
- Browser hiện trang Welcome Laravel

Kiến thức học được:

- composer create-project
- php artisan serve
- File .env cơ bản

---

**Task BE-03**

Task: Cấu hình .env kết nối PostgreSQL
Mục tiêu:

- Cài PostgreSQL nếu chưa có
- Cấu hình DB_CONNECTION, DB_DATABASE, DB_USERNAME, DB_PASSWORD

Thời gian: 25 phút

Done khi:

- php artisan migrate chạy không lỗi

Kiến thức học được:

- .env file
- DB driver config trong Laravel
- Pgsql driver

---

**Task BE-04**

Task: Tìm hiểu routes/api.php vs routes/web.php
Mục tiêu:

- Phân biệt 2 file routes
- Tạo route test GET /api/ping trả về {"status": "ok"}

Thời gian: 20 phút

Done khi:

- Gọi GET /api/ping bằng Postman trả về JSON

Kiến thức học được:

- Route API vs Web
- Route closure
- php artisan route:list

---

## 🗄️ EPIC 2 — Database & Migration

---

**Task DB-01**

Task: Review lại thiết kế DB hiện tại
Mục tiêu:

- Đọc lại file createDB.sql trong /other
- Xác định bảng nào cần thêm: recipes, categories, meal_categories

Thời gian: 20 phút

Done khi:

- Có danh sách bảng cần tạo: users, favorites, recipes, categories, meal_categories

Kiến thức học được:

- DB design review
- Quan hệ recipes ↔ categories (many-to-many)

---

**Task DB-02**

Task: Vẽ ERD đầy đủ
Mục tiêu:

- Vẽ ERD gồm: users, recipes, categories, meal_categories, favorites
- Xác định FK, index cần thiết

Thời gian: 25 phút

Done khi:

- Có file ERD lưu trong /other

Kiến thức học được:

- ERD notation
- One-to-many vs Many-to-many
- Dùng idMeal (string) từ TheMealDB làm PK cho recipes

---

**Task DB-03**

Task: Tìm hiểu Migration trong Laravel
Mục tiêu:

- Đọc file migration mặc định Laravel tạo sẵn
- Hiểu cú pháp Schema::create

Thời gian: 20 phút

Done khi:

- Giải thích được $table->id(), $table->string(), $table->timestamps()

Kiến thức học được:

- Blueprint Schema
- Migration up() / down()
- php artisan migrate:rollback

---

**Task DB-04**

Task: Tạo migration bảng categories
Mục tiêu:

- php artisan make:migration create_categories_table
- Định nghĩa: id_category (string PK), name, thumbnail, description

Thời gian: 20 phút

Done khi:

- php artisan migrate thành công, bảng categories có trong DB

Kiến thức học được:

- make:migration naming convention
- $table->string() làm primary key

---

**Task DB-05**

Task: Tạo migration bảng recipes
Mục tiêu:

- php artisan make:migration create_recipes_table
- Định nghĩa: id_meal (string PK), name, thumbnail, instructions, area, tags, youtube

Thời gian: 25 phút

Done khi:

- Bảng recipes xuất hiện trong DB

Kiến thức học được:

- $table->text() cho long string
- $table->nullable() cho optional fields

---

**Task DB-06**

Task: Tạo migration bảng meal_categories (pivot)
Mục tiêu:

- Tạo bảng trung gian liên kết recipes ↔ categories
- Cột: meal_id (FK → recipes), category_id (FK → categories)

Thời gian: 20 phút

Done khi:

- Bảng meal_categories xuất hiện, có FK

Kiến thức học được:

- Pivot table concept
- $table->foreign()->references()->on()

---

**Task DB-07**

Task: Tạo migration bảng favorites
Mục tiêu:

- Tạo migration favorites dùng meal_id thay recipe_id
- Cột: user_id (FK), meal_id (string FK), created_at

Thời gian: 15 phút

Done khi:

- Bảng favorites có đúng cấu trúc trong DB

Kiến thức học được:

- Refactor DB design từ bản nháp sang Laravel convention

---

**Task DB-08**

Task: Tạo Eloquent Model cho từng bảng
Mục tiêu:

- php artisan make:model Category, Recipe, Favorite
- Khai báo $fillable, $primaryKey, $keyType

Thời gian: 25 phút

Done khi:

- Recipe model có $primaryKey = 'id_meal', $keyType = 'string'

Kiến thức học được:

- Eloquent Model
- $fillable vs $guarded
- Custom primary key type

---

**Task DB-09**

Task: Khai báo Relationship trong Model
Mục tiêu:

- Recipe belongsToMany Category (qua meal_categories)
- User hasMany Favorite
- Favorite belongsTo User

Thời gian: 25 phút

Done khi:

- Chạy được Recipe::with('categories')->first() trong php artisan tinker

Kiến thức học được:

- Eloquent Relationships
- belongsToMany / hasMany / belongsTo
- php artisan tinker để test nhanh

---

## 🌐 EPIC 3 — Batch Clone dữ liệu từ TheMealDB

---

**Task BATCH-01**

Task: Khảo sát TheMealDB API — phân tích data structure
Mục tiêu:

- Gọi thử: /categories.php, /filter.php?c=Beef, /lookup.php?i=52772
- Ghi lại JSON structure đầy đủ của meal detail

Thời gian: 20 phút

Done khi:

- Có ghi chú JSON structure với đủ field: ingredients, measures, area, youtube...

Kiến thức học được:

- TheMealDB API endpoints
- Phân tích data để map sang DB

---

**Task BATCH-02**

Task: Tìm hiểu Laravel Artisan Command custom
Mục tiêu:

- Đọc về php artisan make:command
- Hiểu handle() function, $signature

Thời gian: 15 phút

Done khi:

- Tạo được SeedMealDataCommand trống, chạy php artisan meals:seed không lỗi

Kiến thức học được:

- Custom Artisan Command
- $signature, $description, handle()

---

**Task BATCH-03**

Task: Viết MealDbService gọi TheMealDB API
Mục tiêu:

- Tạo app/Services/MealDbService.php
- Implement: getAllCategories(), getMealsByCategory($cat), getMealDetail($id)

Thời gian: 25 phút

Done khi:

- Gọi MealDbService::getAllCategories() trong tinker trả về array

Kiến thức học được:

- Service Layer pattern
- Laravel HTTP Client (Http::get())
- Xử lý response JSON

---

**Task BATCH-04**

Task: Viết Batch lưu Categories vào DB
Mục tiêu:

- Trong Command handle(): gọi MealDbService::getAllCategories()
- Dùng Category::updateOrCreate() lưu vào DB

Thời gian: 25 phút

Done khi:

- Chạy php artisan meals:seed → bảng categories có dữ liệu

Kiến thức học được:

- updateOrCreate() — idempotent operation
- Chunking array

---

**Task BATCH-05**

Task: Viết Batch lưu Recipes theo từng Category
Mục tiêu:

- Với mỗi category → getMealsByCategory → lấy meal IDs
- Với mỗi ID → getMealDetail → lưu vào bảng recipes

Thời gian: 30 phút

Done khi:

- Bảng recipes có ít nhất 50 records sau khi chạy batch

Kiến thức học được:

- Nested API calls
- sleep() giữa các request tránh rate limit

---

**Task BATCH-06**

Task: Xử lý ingredients — lưu dạng JSON column
Mục tiêu:

- TheMealDB có 20 cột strIngredient1..20 lẻ tẻ
- Gom thành JSON: [{"name": "Kale", "measure": "1 bunch"}]
- Lưu vào cột ingredients_json trong recipes

Thời gian: 20 phút

Done khi:

- recipes.ingredients_json có data đúng format JSON

Kiến thức học được:

- JSON column trong PostgreSQL
- $table->json() trong migration
- Laravel JSON casting

---

**Task BATCH-07**

Task: Test Batch end-to-end & xử lý lỗi
Mục tiêu:

- Chạy full batch, kiểm tra log
- Thêm try/catch và ghi log khi API fail

Thời gian: 25 phút

Done khi:

- Batch chạy hết không crash
- Log file ghi rõ số records đã import

Kiến thức học được:

- Laravel Log facade
- Exception handling trong Command

---

## 🔐 EPIC 4 — Auth API

---

**Task AUTH-01**

Task: Tìm hiểu Laravel Sanctum
Mục tiêu:

- Đọc docs Sanctum
- Phân biệt Sanctum vs Passport vs JWT

Thời gian: 15 phút

Done khi:

- Giải thích được Sanctum dùng token-based auth cho SPA

Kiến thức học được:

- Token-based authentication
- Stateless API auth
- Sanctum vs Passport

---

**Task AUTH-02**

Task: Tìm hiểu Laravel Sanctum
Mục tiêu:

- composer require laravel/sanctum
- Publish config, migrate
- Thêm HasApiTokens vào User model

Thời gian: 20 phút

Done khi:

- Bảng personal_access_tokens xuất hiện trong DB

Kiến thức học được:

- composer require
- vendor:publish
- Trait HasApiTokens

---

**Task AUTH-03**

Task: Tạo FormRequest cho Register & Login
Mục tiêu:

- php artisan make:request RegisterRequest
- php artisan make:request LoginRequest
- Khai báo rules(): email required|unique, password required|min:8

Thời gian: 20 phút

Done khi:

- Gửi request sai format → nhận 422 với message lỗi rõ ràng

Kiến thức học được:

- FormRequest validation
- Validation rules
- Tách validation ra khỏi Controller

---

**Task AUTH-04**

Task: Viết AuthController — Register
Mục tiêu:

- POST /api/register → tạo user, trả về token
- Dùng RegisterRequest để validate

Thời gian: 20 phút

Done khi:

- Postman POST /api/register thành công, nhận được token

Kiến thức học được:

- User::create()
- $user->createToken()->plainTextToken

---

**Task AUTH-05**

Task: Viết AuthController — Login
Mục tiêu:

- POST /api/login → xác thực, trả về token

Thời gian: 20 phút

Done khi:

- Đúng credentials → nhận token
- Sai credentials → nhận 401

Kiến thức học được:

- Auth::attempt()
- HTTP response codes

---

**Task AUTH-06**

Task: Viết AuthController — Logout
Mục tiêu:

- POST /api/logout (protected route, cần Bearer token)
- Xoá token hiện tại

Thời gian: 15 phút

Done khi:

- Gọi /api/logout với token hợp lệ → token bị xoá khỏi DB

Kiến thức học được:

- auth:sanctum middleware
- currentAccessToken()->delete()

---

**Task AUTH-07**

Task: Test toàn bộ Auth flow bằng Postman
Mục tiêu:

- Test flow: Register → Login → gọi protected route → Logout

Thời gian: 20 phút

Done khi:

- Postman Collection có 4 request Auth chạy đúng hết

Kiến thức học được:

- Postman environment variables
- Bearer token workflow

---

## 📋 EPIC 5 — Recipe & Category API

---

**Task RECIPE-01**

Task: Tạo API GET /api/categories
Mục tiêu:

- Trả về danh sách categories từ DB (không gọi TheMealDB nữa)
- Không cần auth

Thời gian: 15 phút

Done khi:

- GET /api/categories trả về JSON array categories từ DB của mình

Kiến thức học được:

- Category::all()
- Route::apiResource()

---

**Task RECIPE-02**

Task: Tạo API GET /api/recipes?category=Beef
Mục tiêu:

- Filter recipes theo category
- Pagination 20 items/page

Thời gian: 25 phút

Done khi:

- GET /api/recipes?category=Beef trả về JSON có data + pagination meta

Kiến thức học được:

- whereHas()
- paginate()
- Query string parameters

---

**Task RECIPE-03**

Task: Tạo API GET /api/recipes/{id}
Mục tiêu:

- Trả về chi tiết 1 recipe kèm categories và ingredients_json

Thời gian: 20 phút

Done khi:

- GET /api/recipes/52772 trả về đầy đủ thông tin

Kiến thức học được:

- Route model binding
- Eager loading with()
- 404 handling

---

**Task RECIPE-04**

Task: Tạo API GET /api/recipes/random
Mục tiêu:

- Trả về N recipes ngẫu nhiên từ DB
- Query param: ?count=2

Thời gian: 15 phút

Done khi:

- GET /api/recipes/random?count=2 trả về 2 meals khác nhau mỗi lần gọi

Kiến thức học được:

- inRandomOrder()
- take() / limit()

---

## ❤️ EPIC 6 — Favorites API

---

**Task FAV-01**

Task: Tạo API POST /api/favorites
Mục tiêu:

- Protected route (cần token)
- Body: { meal_id }
- Kiểm tra trùng trước khi thêm

Thời gian: 25 phút

Done khi:

- Thêm lần đầu → 201 Created
- Thêm trùng → 409 Conflict

Kiến thức học được:

- firstOrCreate()
- HTTP 201 vs 409

---

**Task FAV-02**

Task: Tạo API GET /api/favorites
Mục tiêu:

- Trả về danh sách favorites của user đang đăng nhập
- Kèm thông tin recipe

Thời gian: 20 phút

Done khi:

- GET /api/favorites trả về list đúng theo user đang login

Kiến thức học được:

- $request->user()->favorites()->with('recipe')
- Relationship query

---

**Task FAV-03**

Task: Tạo API DELETE /api/favorites/{id}
Mục tiêu:

- Chỉ user sở hữu mới được xoá
- Xoá của người khác → 403

Thời gian: 20 phút

Done khi:

- DELETE đúng owner → thành công
- DELETE sai owner → 403 Forbidden

Kiến thức học được:

- Ownership check
- HTTP 403 vs 401

---

## 🔍 EPIC 7 — Search API

---

**Task SEARCH-01**

Task: Tạo API GET /api/search?q=chicken
Mục tiêu:

- Tìm kiếm recipes theo tên
- Dùng ILIKE (PostgreSQL case-insensitive)

Thời gian: 20 phút

Done khi:

- GET /api/search?q=chicken trả về recipes có "chicken" trong tên

Kiến thức học được:

- where('name', 'ilike', '%'.$q.'%')
- PostgreSQL ILIKE

---

**Task SEARCH-02**

Task: Tối ưu Search — thêm DB index
Mục tiêu:

- Thêm index vào cột recipes.name
- Tạo migration mới để thêm index

Thời gian: 15 phút

Done khi:

- Migration chạy thành công, index xuất hiện trong DB

Kiến thức học được:

- $table->index()
- Performance mindset

---

## 🖥️ EPIC 8 — FE Upgrade màn hình hiện có

---

**Task FE-01**

Task: Audit FE hiện tại — liệt kê vấn đề cần fix
Mục tiêu:

- Đọc tất cả views: Home, CategoryDetails, RecipeDetails, Login, Register
- Liệt kê: UI chưa đẹp, loading state thiếu, error handling thiếu

Thời gian: 20 phút

Done khi:

- Có danh sách issues của FE hiện tại

Kiến thức học được:

- Code review mindset
- UI/UX audit

---

**Task FE-02**

Task: Nâng cấp màn Home — UI Desktop
Mục tiêu:

- Redesign Home cho desktop (hiện tại đang layout mobile)
- Hero section đẹp hơn
- Category dạng grid nhiều cột

Thời gian: 30 phút

Done khi:

- Home trên desktop trông đẹp, có hover effect, responsive

Kiến thức học được:

- CSS Grid layout
- Desktop-first design
- CSS transitions

---

**Task FE-03**

Task: Nâng cấp màn CategoryDetails
Mục tiêu:

- Recipe grid đẹp hơn
- Skeleton loading thay vì text "Loading..."

Thời gian: 25 phút

Done khi:

- CategoryDetails hiển thị card đẹp với skeleton loading

Kiến thức học được:

- CSS Skeleton loading animation
- Card component design

---

**Task FE-04**

Task: Nâng cấp màn RecipeDetails
Mục tiêu:

- Layout 2 cột: ảnh + info | Ingredients + Instructions
- Hiển thị YouTube video nếu có link

Thời gian: 30 phút

Done khi:

- RecipeDetails chuyên nghiệp, ingredients section rõ ràng, có YouTube embed

Kiến thức học được:

- CSS Grid 2-column
- YouTube iframe embed

---

**Task FE-05**

Task: Nâng cấp Header & Footer
Mục tiêu:

- Header: Logo, Search bar, Login/Register button
- Footer: copyright, links

Thời gian: 25 phút

Done khi:

- Header sticky, đẹp, có search input và auth buttons

Kiến thức học được:

- Sticky header CSS
- Navigation UX patterns

---

## 🖥️ EPIC 9 — FE New màn hình còn thiếu

---

**Task FE-NEW-01**

Task: Thiết kế layout màn Search (desktop)
Mục tiêu:

- Tìm reference UI đẹp cho Search page
- Wireframe hoặc sketch layout

Thời gian: 20 phút

Done khi:

- Có wireframe/sketch của Search page lưu trong /other

Kiến thức học được:

- Search UX patterns
- Desktop layout planning

---

**Task FE-NEW-02**

Task: Code màn Search
Mục tiêu:

- Search input + kết quả dạng grid
- Debounce 500ms khi gõ

Thời gian: 30 phút

Done khi:

- Gõ "chicken" → sau 500ms tự fetch và hiển thị kết quả

Kiến thức học được:

- useDebounce custom hook
- Controlled input

---

**Task FE-NEW-03**

Task: Code màn Favorites
Mục tiêu:

- Chỉ hiển thị khi đã đăng nhập (protected route)
- List dạng card + nút remove từng item

Thời gian: 25 phút

Done khi:

- Vào /favorites khi chưa login → redirect về Login
- Vào khi đã login → hiển thị danh sách đúng

Kiến thức học được:

- Protected Route React
- Conditional rendering

---

## 🔗 EPIC 10 — Kết nối FE ↔ BE

---

**Task CONNECT-01**

Task: Cấu hình CORS trong Laravel
Mục tiêu:

- Cho phép localhost:5173 (Vite dev) gọi API
- Cấu hình config/cors.php

Thời gian: 15 phút

Done khi:

- FE gọi được BE không bị CORS error trên browser

Kiến thức học được:

- CORS concept
- Laravel CORS config
- Allowed origins

---

**Task CONNECT-02**

Task: Tạo axios instance trỏ về Laravel BE
Mục tiêu:

- Tạo src/services/apiClient.ts
- baseURL = http://127.0.0.1:8000/api
- Auto thêm Authorization header từ localStorage

Thời gian: 20 phút

Done khi:

- apiClient.get('/categories') chạy thành công từ FE

Kiến thức học được:

- Axios interceptors
- Bearer token management
- VITE_API_URL env variable

---

**Task CONNECT-03**

Task: Chuyển homeRepository từ TheMealDB → Laravel BE
Mục tiêu:

- Sửa homeRepository.tsx gọi /api/categories và /api/recipes/random
- Không gọi TheMealDB trực tiếp nữa

Thời gian: 20 phút

Done khi:

- Home page load dữ liệu từ DB của mình qua Laravel API

Kiến thức học được:

- Repository pattern khi đổi data source
- Chỉ sửa Repository, không cần sửa Controller & View

---

**Task CONNECT-04**

Task: Chuyển recipeRepository & categoryRepository về BE
Mục tiêu:

- Sửa để gọi /api/recipes/{id} và /api/recipes?category=...

Thời gian: 20 phút

Done khi:

- CategoryDetails và RecipeDetails load đúng từ BE của mình

Kiến thức học được:

- Migrate từ external API → internal API

---

**Task CONNECT-05**

Task: Kết nối Auth FE ↔ BE
Mục tiêu:

- Test Register → Login → nhận token → lưu localStorage
- Header tự động gửi token cho mọi request sau đó

Thời gian: 25 phút

Done khi:

- Đăng ký xong tự động đăng nhập
- Gọi protected API thành công với token

Kiến thức học được:

- Token storage strategy
- Auth state management

---

**Task CONNECT-06**

Task: Kết nối Favorites FE ↔ BE
Mục tiêu:

- Nút yêu thích trên RecipeDetails gọi POST /api/favorites
- Màn Favorites gọi GET /api/favorites và DELETE /api/favorites/{id}

Thời gian: 25 phút

Done khi:

- Click tim → lưu vào DB
- Vào Favorites page → thấy danh sách đúng
- Xoá → biến mất khỏi list

Kiến thức học được:

- Optimistic UI update
- State sync với backend

---

## 📝 EPIC 11 — Tài liệu & Sequence Diagram

---

**Task DOC-01**

Task: Vẽ Sequence Diagram — Luồng Register/Login
Mục tiêu:

- Vẽ sequence: FE → BE → DB → response
- Tool: draw.io hoặc Mermaid

Thời gian: 20 phút

Done khi:

- Có file sequence diagram cho Auth flow lưu trong /other

Kiến thức học được:

- Sequence diagram notation
- UML cơ bản

---

**Task DOC-02**

Task: Vẽ Sequence Diagram — Luồng xem Recipe Details
Mục tiêu:

- Sequence từ click recipe card → fetch API → render

Thời gian: 15 phút

Done khi:

- Có sequence diagram cho RecipeDetails flow

Kiến thức học được:

- Phân tích luồng dữ liệu

---

**Task DOC-03**

Task: Vẽ Sequence Diagram — Luồng Add/Remove Favorite
Mục tiêu:

- Sequence kèm auth check (401 nếu chưa login)

Thời gian: 15 phút

Done khi:

- Có sequence diagram cho Favorites flow

Kiến thức học được:

- Authorization flow diagram

---

**Task DOC-04**

Task: Viết README.md cho dự án
Mục tiêu:

- Mô tả dự án, tech stack, cách chạy local, API endpoints chính

Thời gian: 25 phút

Done khi:

- README đầy đủ, người mới đọc vào biết cách chạy app

Kiến thức học được:

- Technical writing
- Markdown formatting

---

## 🐳 EPIC 12 — Docker hoá dự án _(làm cuối cùng)_

---

**Task DOCKER-01**

Task: Tìm hiểu Docker cơ bản
Mục tiêu:

- Hiểu: Image, Container, Volume, Network
- Đọc Dockerfile mẫu cho Laravel

Thời gian: 25 phút

Done khi:

- Giải thích được Dockerfile và docker-compose.yml làm gì

Kiến thức học được:

- Docker concepts
- Tại sao dùng Docker cho dev environment

---

**Task DOCKER-02**

Task: Viết Dockerfile cho Laravel BE
Mục tiêu:

- Base image: php:8.2-fpm
- Cài composer, PHP extensions cần thiết

Thời gian: 25 phút

Done khi:

- docker build thành công, container chạy được

Kiến thức học được:

- Dockerfile syntax
- PHP extensions trong Docker

---

**Task DOCKER-03**

Task: Viết docker-compose.yml
Mục tiêu:

- Services: app (Laravel), db (PostgreSQL), nginx
- Volumes cho code và DB data

Thời gian: 30 phút

Done khi:

- docker-compose up -d → tất cả service chạy
- Gọi API qua nginx port 80 thành công

Kiến thức học được:

- docker-compose services
- Networking giữa containers

---

**Task DOCKER-04**

Task: Thêm FE vào docker-compose
Mục tiêu:

- Thêm service frontend

Thời gian: 20 phút

Done khi:

- Toàn bộ app chạy với 1 lệnh docker-compose up

Kiến thức học được:

- Multi-service compose
- Build vs dev mode trong Docker

---

## 📊 Tổng kết

| Epic                         | Số task      | Thời gian ước tính |
| ---------------------------- | ------------ | ------------------ |
| EPIC 1 — Laravel Setup       | 5 tasks      | ~1.5 giờ           |
| EPIC 2 — Database            | 9 tasks      | ~3.5 giờ           |
| EPIC 3 — Batch Clone         | 7 tasks      | ~3 giờ             |
| EPIC 4 — Auth API            | 7 tasks      | ~2 giờ             |
| EPIC 5 — Recipe/Category API | 4 tasks      | ~1.5 giờ           |
| EPIC 6 — Favorites API       | 3 tasks      | ~1 giờ             |
| EPIC 7 — Search API          | 2 tasks      | ~35 phút           |
| EPIC 8 — FE Upgrade          | 5 tasks      | ~2.5 giờ           |
| EPIC 9 — FE New screens      | 4 tasks      | ~1.5 giờ           |
| EPIC 10 — Connect FE↔BE      | 6 tasks      | ~2 giờ             |
| EPIC 11 — Docs & Diagrams    | 4 tasks      | ~1.5 giờ           |
| EPIC 12 — Docker             | 4 tasks      | ~1.5 giờ           |
| **TOTAL**                    | **60 tasks** | **~22 giờ**        |

> 💡 Mỗi ngày 2–3 tasks (~1–1.5 giờ) → hoàn thành sau ~4 tuần 🎯
