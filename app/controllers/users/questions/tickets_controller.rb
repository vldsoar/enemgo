module Users
  class Questions::TicketsController < Users::TicketsController
    before_action :set_ticketable

    private

    def set_ticketable
      p 'ola mundo'
      @ticketable = Question.find(params[:question_id])
    end
  end
end
