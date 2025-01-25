class NotesController < ApplicationController
  def index
    @notes = Note.all
    @note = Note.new
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      redirect_to(root_path, notice: "Note saved successfully!")
    else
      render(:index, status: :unprocessable_entity)
    end
  end

  private

  def note_params
    params.require(:note).permit(:content)
  end
end
