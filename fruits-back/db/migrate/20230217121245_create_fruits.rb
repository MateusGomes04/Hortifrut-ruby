class CreateFruits < ActiveRecord::Migration[5.2]
  def change
    create_table :fruits do |t|
      t.string :name
      t.float :prince
      t.string :image_url

      t.timestamps
    end
  end
end
