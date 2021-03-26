class CreateApiV1Works < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_works do |t|
      t.string :title
      t.string :organization
      t.date :length
      t.integer :user_id

      t.timestamps
    end
  end
end
