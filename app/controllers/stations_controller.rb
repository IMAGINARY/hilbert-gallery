class StationsController < ApplicationController
  def index
    @stations = Station.order('name').all
  end

  def new
    @station = Station.new
    # default values
    @station.width = 1920
    @station.height = 1080
  end

  def create
    @station = Station.new(station_params)

    if @station.save
      redirect_to @station
    else
      render 'new'
    end
  end

  def show
    @station = Station.find(params[:id])
  end

  def display
    @no_navbar = true
    @station = Station.find(params[:id])
  end

  def display_all
    @stations = Station.order('name').all
  end

  def edit
    @station = Station.find(params[:id])
  end

  def update
    @station = Station.find(params[:id])

    if @station.update(station_params)
      redirect_to @station
    else
      render 'edit'
    end
  end

  def destroy
    @station = Station.find(params[:id])
    @station.destroy

    redirect_to stations_path
  end

  def station_params
    params.require(:station).permit(:name, :width, :height)
  end
end
