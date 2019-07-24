package com.danielmir.deloitte.test.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Sort;

import com.danielmir.deloitte.test.domain.Todo;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{

	List<Todo> findByUsernameOrderByDoneAscTargetDateAsc(String username);
}

