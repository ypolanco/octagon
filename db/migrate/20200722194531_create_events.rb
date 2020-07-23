class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :name
      t.date :date
      t.time :time
      t.string :gate
      t.string :section
      t.string :row
      t.string :seat
      t.string :ticket_number
      t.string :description

      t.timestamps
    end
  end
end
