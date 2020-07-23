class Event < ApplicationRecord
  has_many :users, dependent: :destroy
  belongs_to :venue
end
