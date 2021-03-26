class Api::V1::ProjectsController < ApplicationController

    before_action :set_user

    def index
        @projects = User.find_by(id: params[:user_id]).projects
        render json: ProjectSerializer.new(@projects)
    end

    def show
        @project = Project.find_by(id: params[:id])
        render json: ProjectSerializer.new(@project)
    end

    def create
        @project = @user.projects.build(project_params)
        render json: ProjectSerializer.new(@project)
    end

    def update
        @project = Project.find(params[:id])
        @project.update(project_params)
        @project.save
        render json: UserSerializer.new(@project)
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render json: {message: 'This Project is successfully deleted'}
    end

    private
    
    def set_user
        @user = User.find(params[:user_id])
    end

    def project_params
        params.require(:project).permit(:title, :description, :demo, :tools, :length, :user_id)
    end

end
