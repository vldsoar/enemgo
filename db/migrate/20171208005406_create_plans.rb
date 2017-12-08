class CreatePlans < ActiveRecord::Migration[5.1]
  def change
    create_table :plans do |t|
      t.float :value
      t.string :name

      t.timestamps
    end
  end
end