class AddKindToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :kind, :integer, default: 0
  end
end
