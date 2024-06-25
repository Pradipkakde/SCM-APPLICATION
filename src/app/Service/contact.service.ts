import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IContact } from '../Models/IContact';
import { IGroup } from '../Models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private  serverUrl:string=`http://localhost:3000`;

  constructor(private httpclinet:HttpClient) { }

//Get all contacts
  public getAllcontacts():Observable<IContact[]>{
    let dataURL:string=`${this.serverUrl}/contacts`;
    return this.httpclinet.get<IContact[]>(dataURL).pipe(catchError(this.handleError)); 
  }

  //Get single contacts
  public getContact(contactId:string):Observable<IContact>{
    let dataURL:string=`${this.serverUrl}/contacts/${contactId}`;
    return this.httpclinet.get<IContact>(dataURL).pipe(catchError(this.handleError));
  }
  //create a contact
  public createContact(contact:IContact):Observable<IContact>{
    let dataURL:string=`${this.serverUrl}/contacts`;
    return this.httpclinet.post<IContact>(dataURL,contact).pipe(catchError(this.handleError));    
  }
  //update a contact
  public updateContact(contact:IContact,contactId:string):Observable<IContact>{
    let dataURL:string=`${this.serverUrl}/contacts/${contact.id}`;
    return this.httpclinet.put<IContact>(dataURL,contact).pipe(catchError(this.handleError));
  }

  //delete a contact
  public deleteContact(contactId:string):Observable<{}>{
    let dataURL:string=`${this.serverUrl}/contacts/${contactId}`;
    return this.httpclinet.delete<{}>(dataURL).pipe(catchError(this.handleError));
  }

  //All Groups
  public getAllGroups():Observable<IGroup[]>{
    let dataURL:string=`${this.serverUrl}/groups`;
    return this.httpclinet.get<IGroup[]>(dataURL).pipe(catchError(this.handleError)); 
  }
  //Get single contacts
  public getGroup(contact:IContact):Observable<IGroup>{
    let dataURL:string=`${this.serverUrl}/groups/${contact.groupId}`;
    return this.httpclinet.get<IGroup>(dataURL).pipe(catchError(this.handleError));
  }



  //error handler
public handleError(error:HttpErrorResponse){
  let errorMessage:string='';
  if(error.error instanceof ErrorEvent){
    errorMessage=`Error :${error.error.message}`
  }
  else{
    errorMessage=`Status:${error.status}\n Message:${error.message} `;
  }
  return throwError(errorMessage);
  
  }
  
  }

