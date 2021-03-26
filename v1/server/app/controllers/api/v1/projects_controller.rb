class Api::V1::ProjectsController < ApplicationController

    def show
        project = Project.find_by(id: params[:id])
        render json: ProjectSerializer.new(project)
    end

end
