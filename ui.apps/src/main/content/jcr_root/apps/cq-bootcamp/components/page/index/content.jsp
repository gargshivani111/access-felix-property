<%@include file="/apps/cq-bootcamp/global.jsp" %>
<%@page session="false" %>


This is the Index for the Project. <br/>

<c:set var="nameService" value="<%=sling.getService(com.ig.bootcamp.core.NamingService.class)%>"/>

<i>Name of Author is <u>${nameService.authorName}</u> and Gender is <u>${nameService.authorGender}</u></i>
<br/> Checkbox value property :${nameService.checkbox}
<br/>The Subjects are
<c:forEach var="columnHeader" items="${nameService.multiString}">
    <td>
        <c:out value="${columnHeader}" />
    </td>
</c:forEach>



