class MainController < ApplicationController
  def index

    ahoy.track("all")
    @visits = Visit.count

  end

  def beingUpdated
  end


end
