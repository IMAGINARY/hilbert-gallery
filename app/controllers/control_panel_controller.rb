class ControlPanelController < ApplicationController
  def index
    @images = Array.new
    (1..6).each do |n|
      @images.push({
        id: n,
        filename: "sample_images/#{n}.jpg",
        thumbnail: "sample_images/#{n}-thumb.jpg",
      })
    end
  end
end
