(function() {
    angular
        .module('DRDapp')
        .filter('openTickets', openTickets);

    function openTickets() {
        return function(tickets, status) {
            var out = [];
            if (tickets && !status) {
                for (var i = 0; i < tickets.length; i++) {
                    var ticket = tickets[i];
                    if (ticket.Status != 'Resolved' && ticket.Status != 'Closed') {
                        out.push(ticket);
                    }
                }

                if (out.length === 0) {
                    return emptyTicket;
                }
                return out;
            }
            return tickets;
        };
    }
})();