package com.example.wisdompet.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.data.jpa.domain.Specification;

import com.intuit.graphql.filter.client.ExpressionFormat;
import com.intuit.graphql.filter.client.FilterExpression;

import graphql.schema.DataFetchingEnvironment;

public class BaseCustomerService<T> {

    protected Specification<T> getSpecification(DataFetchingEnvironment env, String whereFieldName) {
        FilterExpression.FilterExpressionBuilder builder = FilterExpression.newFilterExpressionBuilder();
        var args = new HashMap<String, Object>(env.getArguments());
        var filterMap = args.get(whereFieldName);
        if (filterMap == null || ((Map) filterMap).isEmpty() || ((Map) filterMap).size() > 1) {
            return null;
        }
        if (whereFieldName != "filter") {
            args.put("filter", filterMap);
        }
        FilterExpression filterExpression = builder.args(args)
                .build();
        Specification<T> specification = filterExpression.getExpression(ExpressionFormat.JPA);
        return specification;
    }
}
