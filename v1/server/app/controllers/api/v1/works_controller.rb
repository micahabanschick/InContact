class Api::V1::WorksController < ApplicationController

    def show
        work = Work.find_by(id: params[:id])
        render json: WorkSerializer.new(work)
    end

end
