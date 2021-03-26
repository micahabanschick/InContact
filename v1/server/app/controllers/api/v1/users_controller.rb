class Api::V1::UsersController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        options = {
            include: [:works, :projects]
        }
        render json: UserSerializer.new(user, options)
    end

end
