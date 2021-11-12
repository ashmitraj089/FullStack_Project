package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Education;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long>{

}
