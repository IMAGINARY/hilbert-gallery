require "test_helper"

class ExhibitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get exhibits_url
    assert_response :success
  end
end
