using EmployeePerfomanceEvaluationSystem.DataContext;
using EmployeePerfomanceEvaluationSystem.Models;
using EmployeePerfomanceEvaluationSystem.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EmployeePerfomanceEvaluationSystem.Repositories.Classes
{
    public class RatingRepository : IRatingRepository
    {

        private EmployeePerformaceDbContext _context;
        public RatingRepository(EmployeePerformaceDbContext context)
        {
            _context = context;
        }

        public async Task<List<Ratings>> GetRatings()
        {
            return await _context.Ratings.ToListAsync();
        }
    }
}
