class TimelinesController < ApplicationController
  def index
  end

  def view
    @id = params[:id]
  end
end
