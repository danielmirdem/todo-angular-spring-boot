package com.danielmir.deloitte.test.domain;

import java.util.Date;
import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;

@Entity
public class Todo implements Serializable{
    
    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String description;
    private Date targetDate;
    private Date lastUpdate;
    private String comment;
    private boolean done;

    public Todo(){}

    public Todo(Long id, String username, String description, Date targetDate, Date lastUpdate, String comment, boolean done){
        this.id = id;
        this.username = username;
        this.description = description;
        this.targetDate = targetDate;
        this.lastUpdate = lastUpdate;
        this.comment = comment;
        this.done = done;
    }

    /**
     * @return the done
     */
    public boolean isDone() {
        return done;
    }

    /**
     * @return the targetDate
     */
    public Date getTargetDate() {
        return targetDate;
    }

    /**
     * @param targetDate the targetDate to set
     */
    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    /**
     * @return the description
     */
    public String getDescription() {
        return description;
    }

    /**
     * @param description the description to set
     */
    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * @return the username
     */
    public String getUsername() {
        return username;
    }

    /**
     * @param username the username to set
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @param done the done to set
     */
    public void setDone(boolean done) {
        this.done = done;
    }
    

    public Date getLastUpdate(){
        return lastUpdate;
    }

    public void setLastUpdate(Date lastUpdate){
        this.lastUpdate = lastUpdate;
    }

    public String getComment(){
        return comment;
    }

    public void setComment(String comment){
        this.comment = comment;
    }


    @Override
    public int hashCode(){
        final int prime = 31;
        int result = 1;
        result = prime * result + (int) (id ^ (id >>> 32));
        return result;
    }

    @Override
    public boolean equals(Object obj){
        if(this == obj)
            return true;
        if(obj == null)
            return false;
        if(getClass() != obj.getClass())
            return false;
        Todo other = (Todo) obj;
        if(id != other.getId())
            return false;
        return true;
    }
    
}