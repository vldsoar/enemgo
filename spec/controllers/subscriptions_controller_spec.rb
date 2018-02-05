require 'rails_helper'

RSpec.describe SubscriptionsController, type: :controller do

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #created" do
    it "returns http success" do
      get :created
      expect(response).to have_http_status(:success)
    end
  end

end
