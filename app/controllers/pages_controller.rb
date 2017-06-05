class PagesController < ApplicationController
  caches_page :show
  layout 'casebooks'

  def show
    @page_cache = true
    @page = Page.where(slug: params[:id]).first
    if @page.nil?
      redirect_to root_url, :status => 301
      return
    end
    @page_title = "#{@page.page_title} | H2O Classroom Tools"
  end
end
