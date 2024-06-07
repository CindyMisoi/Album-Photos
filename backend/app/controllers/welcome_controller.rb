class WelcomeController < ApplicationController
    def index
        # render a view or perform some action
        render plain: "Welcome to my app!"
      end
end
