require "test_helper"

class ExhibitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get exhibits_index_url
    assert_response :success
  end
end
