class Timeline < ApplicationRecord
  validates :title, length: { maximum: 50 }
end
