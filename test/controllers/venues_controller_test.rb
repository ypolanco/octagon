require 'test_helper'

class VenuesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @venue = venues(:one)
  end

  test "should get index" do
    get venues_url, as: :json
    assert_response :success
  end

  test "should create venue" do
    assert_difference('Venue.count') do
      post venues_url, params: { venue: { address: @venue.address, city: @venue.city, event_id: @venue.event_id, name: @venue.name, state: @venue.state, zip_code: @venue.zip_code } }, as: :json
    end

    assert_response 201
  end

  test "should show venue" do
    get venue_url(@venue), as: :json
    assert_response :success
  end

  test "should update venue" do
    patch venue_url(@venue), params: { venue: { address: @venue.address, city: @venue.city, event_id: @venue.event_id, name: @venue.name, state: @venue.state, zip_code: @venue.zip_code } }, as: :json
    assert_response 200
  end

  test "should destroy venue" do
    assert_difference('Venue.count', -1) do
      delete venue_url(@venue), as: :json
    end

    assert_response 204
  end
end
