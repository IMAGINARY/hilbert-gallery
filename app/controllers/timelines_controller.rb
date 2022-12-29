class TimelinesController < ApplicationController
  def index
    @timelines = Timeline.all
  end

  def show
    @id = params[:id]
  end

  def new
    @timeline = Timeline.new
    @timeline.title = 'Untitled'

    if @timeline.save
      redirect_to @timeline
    else
      redirect_to timelines_path
    end
  end

  def create
    @timeline = Timeline.new(timeline_params)

    if @timeline.save
      redirect_to @timeline
    else
      render 'new'
    end
  end

  def update
    @timeline = Timeline.find(params[:id])

    if @timeline.update(timeline_params)
      redirect_to @timeline
    else
      render 'edit'
    end
  end

  def destroy
    @timeline = Timeline.find(params[:id])
    @timeline.destroy

    redirect_to timelines_path
  end

  private

  def timeline_params
    params.require(:timeline).permit(:title, :script)
  end
end
