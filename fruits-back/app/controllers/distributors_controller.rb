class DistributorsController < ApplicationController
    def index
        @distributors = Distributor.all
        render json: @distributors
    end
end
