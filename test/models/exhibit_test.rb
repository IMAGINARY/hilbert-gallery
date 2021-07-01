require "test_helper"

class ExhibitTest < ActiveSupport::TestCase
  context "validations" do
    should validate_numericality_of(:year)
    should allow_value(-5000).for(:year)
    should allow_value(0).for(:year)
    should allow_value(2050).for(:year)
    should_not allow_value(10001).for(:year)
    should validate_length_of(:city).is_at_most(50)
    should validate_length_of(:region).is_at_most(50)
    should validate_length_of(:country).is_equal_to(2)
    should validate_length_of(:submitter_name).is_at_most(100)
    should validate_length_of(:submitter_email).is_at_most(100)
  end

  context "validations with city" do
    subject { Exhibit.create(city: 'Ciudad Autónoma de Buenos Aires') }

    should validate_presence_of(:country).with_message("You must specify a country if the city or region are entered.")
  end

  context "validations with region" do
    subject { Exhibit.create(region: 'Buenos Aires') }

    should validate_presence_of(:country).with_message("You must specify a country if the city or region are entered.")
  end

  context "validations with region and city" do
    subject { Exhibit.create(city: 'Ciudad Autónoma de Buenos Aires', region: 'Buenos Aires') }

    should validate_presence_of(:country).with_message("You must specify a country if the city or region are entered.")
  end

  context "validations without region or city" do
    should_not validate_presence_of(:country)
  end

  test "location format" do
    assert_equal exhibits(:one).location, 'Basel, Switzerland'
    assert_equal exhibits(:two).location, 'Switzerland'
    assert_empty exhibits(:three).location
    assert_equal exhibits(:five).location, 'Freiburg im Breisgau (Baden-Württemberg), Germany'
    assert_equal exhibits(:six).location, 'Bayern, Germany'
  end
end