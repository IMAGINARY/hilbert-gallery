module ApplicationHelper
  def title(text)
    content_for :title, text
  end

  def is_active?(path)
    'active' if current_page?(path)
  end
end
