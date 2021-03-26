class CreateApiV1Projects < ActiveRecord::Migration[6.0]
  def change
    create_table :api_v1_projects do |t|
      t.string :title
      t.string :description
      t.string :demo
      t.string :tools
      t.date :length
      t.integer :user_id

      t.timestamps
    end
  end
end
