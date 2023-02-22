class AddDistributorToFruits < ActiveRecord::Migration[5.2]
  def change
    add_reference :fruits, :distributor, foreign_key: true
  end
end
