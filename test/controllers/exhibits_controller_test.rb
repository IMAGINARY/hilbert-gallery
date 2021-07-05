require "test_helper"

class ExhibitsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get exhibits_path
    assert_response :success
  end

  test "should get show" do
    get exhibit_path(exhibits(:one))
    assert_response :success
  end

  test "should get new" do
    get new_exhibit_path
    assert_response :success
  end

  test "should create exhibit" do
    sample = exhibits(:five)
    assert_difference("Exhibit.count") do
      post exhibits_url, params: { exhibit: { caption: 'New caption', credits: sample.credits, year: sample.year, city: sample.city, region: sample.region, country: sample.country, notes: sample.notes, submitter_name: sample.submitter_name, submitter_email: sample.submitter_email, media_file: fixture_file_upload("1.jpg", "image/jpg") } }
    end

    assert_redirected_to exhibit_path(Exhibit.last)
    assert_equal Exhibit.last.caption, 'New caption'
    assert_equal Exhibit.last.credits, sample.credits
    assert_equal Exhibit.last.year, sample.year
    assert_equal Exhibit.last.city, sample.city
    assert_equal Exhibit.last.region, sample.region
    assert_equal Exhibit.last.country, sample.country
    assert_equal Exhibit.last.notes, sample.notes
    assert_equal Exhibit.last.submitter_name, sample.submitter_name
    assert_equal Exhibit.last.submitter_email, sample.submitter_email
  end

  test "should create exhibit with minimal parameters" do
    assert_difference("Exhibit.count") do
      # We make it fail by specifying a city without specifying the country
      post exhibits_url, params: { exhibit: { media_file: fixture_file_upload("1.jpg", "image/jpg")  } }
    end

    assert_redirected_to exhibit_path(Exhibit.last)
  end

  test "should create exhibit with few parameters" do
    assert_difference("Exhibit.count") do
      # We make it fail by specifying a city without specifying the country
      post exhibits_url, params: { exhibit: { city: 'Berlin', country: 'DE', media_file: fixture_file_upload("1.jpg", "image/jpg")  } }
    end

    assert_redirected_to exhibit_path(Exhibit.last)
  end

  test "should fail creating exhibit if city is specified without country" do
    assert_no_difference("Exhibit.count") do
      # We make it fail by specifying a city without specifying the country
      post exhibits_url, params: { exhibit: { city: 'Berlin', media_file: fixture_file_upload("1.jpg", "image/jpg")  } }
    end

    assert_response :success
    assert_equal @controller.view_assigns['exhibit'].errors.messages.count, 1
    assert_equal @controller.view_assigns['exhibit'].errors.messages[:country].count, 1
  end

  test "should fail creating exhibit if no file is attached" do
    assert_no_difference("Exhibit.count") do
      # We make it fail by specifying a city without specifying the country
      post exhibits_url, params: { exhibit: { empty: true } }
    end

    assert_response :success
    assert_equal @controller.view_assigns['exhibit'].errors.messages.count, 1
    assert_equal @controller.view_assigns['exhibit'].errors.messages[:media_file].count, 1
  end

  test "should fail creating exhibit if the media file is the wrong format" do
    assert_no_difference("Exhibit.count") do
      # We make it fail by specifying a city without specifying the country
      post exhibits_url, params: { exhibit: { media_file: fixture_file_upload("invalid.md", "text/markdown")  } }
    end

    assert_response :success
    assert_equal @controller.view_assigns['exhibit'].errors.messages.count, 1
    assert_equal @controller.view_assigns['exhibit'].errors.messages[:media_file].count, 1
  end

  test "should get edit" do
    get edit_exhibit_path(exhibits(:one))
    assert_response :success
  end

  test "should update exhibit" do
    sample = exhibits(:five)
    patch exhibit_path(exhibits(:five)), params: { exhibit: { caption: 'New caption', credits: sample.credits, year: sample.year, city: sample.city, region: sample.region, country: sample.country, notes: sample.notes, submitter_name: sample.submitter_name, submitter_email: sample.submitter_email } }
    assert_redirected_to exhibit_path(exhibits(:five))
    sample.reload
    assert_equal sample.caption, 'New caption'
    assert_equal sample.credits, sample.credits
    assert_equal sample.year, sample.year
    assert_equal sample.city, sample.city
    assert_equal sample.region, sample.region
    assert_equal sample.country, sample.country
    assert_equal sample.notes, sample.notes
    assert_equal sample.submitter_name, sample.submitter_name
    assert_equal sample.submitter_email, sample.submitter_email
  end

  test "should not update exhibit" do
    one = exhibits(:one)
    # We make it fail by specifying a city without specifying the country
    patch exhibit_path(exhibits(:one)), params: { exhibit: { caption: 'New caption', credits: one.credits, year: one.year, city: 'Berlin', region: one.region, country: '', notes: one.notes, submitter_name: one.submitter_name, submitter_email: one.submitter_email } }
    assert_response :success
  end

  test "should destroy exhibit" do
    assert_difference('Exhibit.count', -1) do
      delete exhibit_path(exhibits(:one))
    end
    assert_redirected_to exhibits_path
  end

  def after_teardown
    super
    FileUtils.rm_rf(ActiveStorage::Blob.service.root)
    FileUtils.rm_rf(ActiveStorage::Blob.services.fetch(:test_fixtures).root)
  end
end
