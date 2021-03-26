class Api::V1::Admin::WorksController < ApplicationController

    def index
        @works = Work.all 
        render json: WorkSerializer.new(@works)
    end

    def show
        work = Work.find_by(id: params[:id])
        render json: WorkSerializer.new(work)
    end

end
