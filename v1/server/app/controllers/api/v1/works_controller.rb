class Api::V1::WorksController < ApplicationController

    def index
        @works = User.find_by(id: params[:user_id]).works
        render json: WorkSerializer.new(@works)
    end

    def show
        work = Work.find_by(id: params[:id])
        render json: WorkSerializer.new(work)
    end

end
