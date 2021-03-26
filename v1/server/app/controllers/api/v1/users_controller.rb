class Api::V1::UsersController < ApplicationController

    def show
        @user = User.find_by(id: params[:id])
        options = {
            include: [:works, :projects]
        }
        render json: UserSerializer.new(@user, options)
    end

    def create
        @user = User.create(user_params)
        options = {
            include: [:works, :projects]
        }
        render json: UserSerializer.new(@user, options)
    end

    def update
        @user = User.find(params[:id])
        @user.update(user_params)
        @user.save
        options = {
            include: [:works, :projects]
        }
        render json: UserSerializer.new(@user, options)
    end

    def destroy
        @user = User.find(params[:id])
        @user.destroy
        render json: {message: 'This User is successfully deleted'}
    end

    private

    def user_params
        params.require(:user).permit(:name, :password, :email)
    end

end
