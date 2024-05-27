# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2024_05_27_213550) do
  create_table "api_albums", force: :cascade do |t|
    t.integer "api_user_id", null: false
    t.string "album_title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["api_user_id"], name: "index_api_albums_on_api_user_id"
  end

  create_table "api_photos", force: :cascade do |t|
    t.integer "api_album_id", null: false
    t.string "photo_title"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["api_album_id"], name: "index_api_photos_on_api_album_id"
  end

  create_table "api_users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "api_albums", "api_users"
  add_foreign_key "api_photos", "api_albums"
end
