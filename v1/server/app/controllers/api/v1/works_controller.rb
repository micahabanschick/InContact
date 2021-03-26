class Api::V1::WorksController < ApplicationController

    before_action :set_user

    def index
        @works = User.find_by(id: params[:user_id]).works
        render json: WorkSerializer.new(@works)
    end

    def show
        @work = Work.find_by(id: params[:id])
        render json: WorkSerializer.new(@work)
    end

    def create
        @work = @user.works.build(work_params)
        render json: WorkSerializer.new(@work)
    end

    def update
        @work = Work.find(params[:id])
        @work.update(work_params)
        @work.save
        render json: UserSerializer.new(@work)
    end

    private

    def set_user
        @user = User.find_by(params[:user_id])
    end

    def work_params
        params.require(:work).permit(:title, :organization, :length, :user_id)
    end

end
