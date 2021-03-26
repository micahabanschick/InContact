class Api::V1::ProjectsController < ApplicationController

    def index
        @projects = User.find_by(id: params[:user_id]).projects
        render json: ProjectSerializer.new(@projects)
    end

    def show
        project = Project.find_by(id: params[:id])
        render json: ProjectSerializer.new(project)
    end

end
