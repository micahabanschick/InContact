class CreateWorks < ActiveRecord::Migration[6.0]
  def change
    create_table :works do |t|
      t.string :title
      t.string :organization
      t.date :length
      t.integer :user_id

      t.timestamps
    end
  end
end
