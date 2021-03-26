class Api::V1::ProjectsController < ApplicationController

    before_action :set_user

    def index
        @projects = User.find_by(id: params[:user_id]).projects
        render json: ProjectSerializer.new(@projects)
    end

    def show
        project = Project.find_by(id: params[:id])
        render json: ProjectSerializer.new(project)
    end

    private

    def set_user
        @user = User.find(params[:user_id])
    end


    def project_params
        params.require(:project).permit(:title, :description, :demo, :tools, :length, :user_id)
    end

end
