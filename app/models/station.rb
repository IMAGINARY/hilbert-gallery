class Station < ApplicationRecord
  validates :name, length: { maximum: 50 }, uniqueness: true, presence: true
  validates :width, numericality: { only_integer: true, less_than: 10000 }, presence: true
  validates :height, numericality: { only_integer: true, less_than: 10000 }, presence: true
end
