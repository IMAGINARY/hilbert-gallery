module ExhibitsHelper
  def submitter_link(exhibit)
    return link_to exhibit.submitter_name, "mailto:#{exhibit.submitter_email}" if exhibit.submitter_email && exhibit.submitter_name
    return exhibit.submitter_email if exhibit.submitter_email
    return exhibit.submitter_name if exhibit.submitter_name

    nil
  end
end
